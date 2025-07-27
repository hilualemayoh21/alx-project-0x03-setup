import Link from "next/link";
import Button from "../common/Button";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  const handleSignUp = () => {
    router.push("/sign-up");
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link
          href="/"
          className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight"
        >
          Splash App
        </Link>
        <div className="flex gap-4">
          <Button
            action={handleSignIn}
            buttonLabel="Sign In"
            buttonBackgroundColor="red"
          />
          <Button
            action={handleSignUp}
            buttonLabel="Sign Up"
            buttonBackgroundColor="blue"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
