import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TLogin } from "@/types/auth/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
export const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: TLogin) => {
    setLoading(true);
    console.log(values);
  };
  return (
    <section
      className={`w-full lg:grid lg:grid-cols-2 h-screen bg-white bg-cover bg-center object-cover bg-no-repeat -z-10`}
    >
      <div
        className="image max-h-[100vh] relative bg-no-repeat bg-center bg-cover bg-blend-color  lg:block hidden"
        style={{ backgroundImage: `url(/bglogin.webp)` }}
      >
        <div className="relative top-0 left-0 w-full h-full bg-primary opacity-90" />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <img src="/logoKarta.webp" alt="gambar atas" className="w-1/3" />
        </div>
      </div>
      <div className="form flex flex-col justify-center h-full items-center w-full gap-y-4 relative z-[51]">
        {/* <Button onClick={() => setCount(count + 1)}>Tambah</Button>
      <Button onClick={() => setOpen(true)}>Test</Button>
      <Modal showModal={open} onClose={() => setOpen(false)}>
        <div onClick={() => setOpen(false)}>test</div>
        <h1>{count}</h1>
      </Modal> */}
        <img
          src="/Logo.webp"
          alt="gambar atas"
          width={150}
          height={150}
          className="block lg:hidden md:w-1/3  top-3  "
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="gap-5 flex flex-col justify-center  lg:w-1/2 w-2/3 z-[9999]"
          >
            <div className="space-y-2">
              <h1 className="md:text-4xl text-xl font-bold ">WargaApps</h1>
              <p className="text-sm lg:text-base">
                Selamat Datang, Masuk Dengan Aman
              </p>
            </div>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Masukan Email Anda"
                      type="email"
                      //   className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      //   className="w-full"
                      {...field}
                      placeholder="Masukan Password Anda"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className=" leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm lg:text-base"
              >
                Ingat Saya
              </label>
            </div>
            <Link href="/forgotPassword">
              <h1 className="text-primary text-sm lg:text-base">
                Lupa Password ?
              </h1>
            </Link>
          </div> */}
            {loading ? (
              <Button disabled>Please wait</Button>
            ) : (
              <Button type="submit" className="w-full">
                Log In
              </Button>
            )}
            {/* <div className="flex space-x-3 justify-center items-center">
            <h1 className="text-sm lg:text-base">Belum punya akun ?</h1>
            <Link href="/register">
              <h1 className="text-primary text-sm lg:text-base">Buat Akun</h1>
            </Link>
          </div> */}
          </form>
        </Form>
      </div>
    </section>
  );
};
