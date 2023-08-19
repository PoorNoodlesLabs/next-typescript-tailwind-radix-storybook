import {
  Button,
  DialogRoot,
  DialogTrigger,
  DialogTitle,
  DialogContent,
} from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DialogRoot>
        <DialogTrigger>
          <Button>Hello World</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Hello World</DialogTitle>
        </DialogContent>
      </DialogRoot>
    </main>
  );
}
