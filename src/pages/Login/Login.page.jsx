import { Label, TextInput, Checkbox, Button } from "flowbite-react";

const Login = () => {
  return (
    <div className="w-full h-[60vh] grid place-items-center">
      <div className="w-[90%] sm:w-1/3">
        <h1 className="text-center text-4xl font-display">LOGIN TO LEVEL UP</h1>
        <form className="flex flex-col gap-4 mt-10">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@levelup.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required={true} />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};
export default Login;
