import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSendEmail } from "@/hooks/use-emailJs";
import { Controller } from "react-hook-form";
import { toast } from "@/hooks/use-toast";


const schema = z.object({
  name: z.string().min(3, "Informe seu nome completo"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(8, "Informe um telefone válido"),
  reason: z.enum([
    "Developer job proposal",
    "Website Development",
    "Website Maintenance",
    "Other matters"
  ], {
    errorMap: () => ({ message: "Selecione o motivo do contato" })
  }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactSheet({ open, onOpenChange }: { open: boolean, onOpenChange: (v: boolean) => void }) {
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      reason: "Other matters",
      message: ""
    }
  });
  const { send, loading } = useSendEmail();

  async function onSubmit(data: FormData) {
    const [firstname, ...rest] = data.name.trim().split(" ");
    const lastname = rest.join(" ");

    const today = new Date().toISOString().split("T")[0];

    const result = await send({
      ...data,
      firstname,
      lastname,
      to_email: "brendo.business1@gmail.com",
      date: today
    });
    if (result?.success === true) {
      toast({
        title: "Sucesso",
        description: "E-mail enviado com sucesso!",
        variant: "default"
      });
      reset();
      onOpenChange(false);
    } else {
      toast({
        title: "Erro",
        description: "Erro ao enviar e-mail. Tente novamente.",
        variant: "destructive"
      });
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Entrar em contato</SheetTitle>
        </SheetHeader>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Nome completo" {...register("name")} disabled={loading} />
          {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}

          <Input placeholder="E-mail" {...register("email")} disabled={loading} />
          {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}

          <Input placeholder="Telefone" {...register("phone")} disabled={loading} />
          {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}

          <Controller
            name="reason"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value || undefined}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o motivo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Developer job proposal">
                    Developer job proposal
                  </SelectItem>
                  <SelectItem value="Website Development">
                    Website Development
                  </SelectItem>
                  <SelectItem value="Website Maintenance">
                    Website Maintenance
                  </SelectItem>
                  <SelectItem value="Other matters">
                    Other matters
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.reason && <span className="text-red-500 text-xs">{errors.reason.message}</span>}

          <Textarea placeholder="Mensagem (opcional)" {...register("message")} disabled={loading} />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}