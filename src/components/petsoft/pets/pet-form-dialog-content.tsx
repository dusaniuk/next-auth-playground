import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { useDialogContext } from "~/context/dialog-context";
import { usePetContext } from "~/context/pet-context";
import { Pet } from "~/lib/types";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  ownerName: z
    .string()
    .min(2, { message: "Owner name is required" }),
  age: z.number().min(0, { message: "Age is required" }),
  imageUrl: z
    .string()
    .min(2, { message: "Image URL is required" }),
  notes: z
    .string()
    .min(2, { message: "Notes are required" }),
});

export type PetFormDialogContentProps = {
  pet?: Pet;
};

export function PetFormDialogContent({
  pet,
}: PetFormDialogContentProps) {
  const { addPet, editPet } = usePetContext();
  const { closeDialog } = useDialogContext();

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: pet?.name ?? "",
      ownerName: pet?.ownerName ?? "",
      imageUrl: pet?.imageUrl ?? "",
      age: pet?.age ?? 0,
      notes: pet?.notes ?? "",
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    if (pet) {
      editPet({ id: pet.id, ...data });
    } else {
      addPet(data);
    }

    closeDialog();
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>
          {pet ? "Edit a pet" : "Add a pet"}
        </DialogTitle>
      </DialogHeader>

      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ownerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Owner name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image link</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(event) =>
                      field.onChange(
                        event.target.valueAsNumber,
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter>
            <Button className="mt-4" type="submit">
              {pet ? "Save changes" : "Add pet"}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
}
