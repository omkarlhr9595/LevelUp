import { Label, TextInput, Checkbox, Button } from "flowbite-react";

const Register = () => {
  return (
    <div className="grid h-[60vh] w-full place-items-center">
      <div className="w-[90%] sm:w-1/3">
        <h1 className="text-center font-display text-4xl">
          REGISTER TO LEVEL UP
        </h1>
        <form className="mt-10 flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              id="password2"
              type="password"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput
              id="repeat-password"
              type="password"
              required={true}
              shadow={true}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree">
              I agree with the
              <a
                href="/forms"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                {" "}
                terms and conditions
              </a>
            </Label>
          </div>
          <Button type="submit">Register new account</Button>
        </form>
      </div>
    </div>
  );
};
export default Register;
