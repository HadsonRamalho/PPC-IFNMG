import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#169e69] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">PPC-IFNMG</h1>
          <div className="flex gap-2">
            <Link href="/login">
              <Button variant="outline" className="text-white border-white hover:bg-white/20">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline" className="text-white border-white hover:bg-white/20">
                Cadastro
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold tracking-tight">Plataforma de Edição de Documentos PPC</h2>
          <p className="text-xl text-muted-foreground">
            Edite e atualize informações de cursos, ementas e campus do IFNMG de forma simples e rápida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/editor">
              <Button className="bg-[#169e69] hover:bg-[#0e7e50] text-white px-8 py-6 text-lg">Começar a Editar</Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline" className="px-8 py-6 text-lg">
                Criar Conta
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Informações do Curso</h3>
            <p className="text-muted-foreground">
              Edite detalhes como nome do curso, carga horária, modalidade e outras informações relevantes.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Informações da Ementa</h3>
            <p className="text-muted-foreground">
              Atualize conteúdos programáticos, bibliografia, metodologia de ensino e avaliação.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Informações do Campus</h3>
            <p className="text-muted-foreground">
              Modifique dados sobre infraestrutura, localização e contatos do campus.
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} PPC-IFNMG. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
