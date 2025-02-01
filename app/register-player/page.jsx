import { Nav } from "../../components/nav"
import { Footer } from "../../components/footer"
import { RegistrationForm } from "./components/register-form"
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col my-10">
      <Nav />
      <div className="flex-grow container max-w-4xl mx-auto py-16">
        <h1 className="text-3xl font-bold text-center mb-8">Compete on ForceCode</h1>
        <Alert variant="info" className="mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            Make sure you&apos;ve connected your MetaMask wallet before registering. This will ensure we can verify your
            Ethereum address.
          </AlertDescription>
        </Alert>
        <RegistrationForm />
      </div>
    </main>
  )
}

