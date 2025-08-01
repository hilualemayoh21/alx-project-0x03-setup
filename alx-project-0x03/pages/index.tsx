import Button from "@/components/common/Button";
import { useRouter } from "next/router";
import { PageRouteProps } from "@/interface"; // <-- import here

export default function Home() {
  const router = useRouter();

  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-4">
      <h1>Welcome to Splash App</h1>

      <p className="text-lg text-gray-600 mb-8">
        Your one-stop platform for everything AI you need. Start exploring by
        navigating to our features below.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          action={() => routeToNextPage({ pageRoute: "/generate-text-ai" })}
          buttonLabel="Generate Text"
          buttonBackgroundColor="blue"
          buttonSize="text-base"
        />
        <Button
          action={() => routeToNextPage({ pageRoute: "/text-to-image" })}
          buttonLabel="Text to Image"
          buttonBackgroundColor="green"
          buttonSize="text-base"
        />
        <Button
          action={() => routeToNextPage({ pageRoute: "/counter-app" })}
          buttonLabel="Contact us"
          buttonBackgroundColor="orange"
          buttonSize="text-base"
        />
      </div>
    </div>
  );
}
