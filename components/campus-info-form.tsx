"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CampusInfoForm() {
  const [campusData, setCampusData] = useState({
    name: "IFNMG - Campus Montes Claros",
    address: "Rua Dois, 300 - Village do Lago I, Montes Claros - MG, 39404-058",
    phone: "(38) 2103-4141",
    email: "campus.montesclaros@ifnmg.edu.br",
    director: "Prof. Dr. Renato Afonso Cota Silva",
    infrastructure:
      "O campus possui 20 salas de aula, 10 laboratórios de informática, biblioteca, auditório, cantina, quadra poliesportiva e áreas de convivência.",
    history:
      "O Campus Montes Claros do IFNMG foi criado em 2010, como parte da expansão da Rede Federal de Educação Profissional e Tecnológica. Desde então, tem se destacado na oferta de cursos técnicos e superiores na região norte de Minas Gerais.",
  })

  const handleChange = (field: string, value: string) => {
    setCampusData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informações do Campus</CardTitle>
        <CardDescription>Edite as informações relacionadas ao campus onde o curso é oferecido.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="basic">
          <TabsList className="grid grid-cols-2 w-full max-w-md mb-6">
            <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
            <TabsTrigger value="additional">Informações Adicionais</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="campusName">Nome do Campus</Label>
                <Input id="campusName" value={campusData.name} onChange={(e) => handleChange("name", e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="campusDirector">Diretor Geral</Label>
                <Input
                  id="campusDirector"
                  value={campusData.director}
                  onChange={(e) => handleChange("director", e.target.value)}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="campusAddress">Endereço</Label>
                <Input
                  id="campusAddress"
                  value={campusData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="campusPhone">Telefone</Label>
                <Input
                  id="campusPhone"
                  value={campusData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="campusEmail">Email</Label>
                <Input
                  id="campusEmail"
                  value={campusData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="additional" className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="campusInfrastructure">Infraestrutura</Label>
              <Textarea
                id="campusInfrastructure"
                rows={4}
                value={campusData.infrastructure}
                onChange={(e) => handleChange("infrastructure", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="campusHistory">Histórico do Campus</Label>
              <Textarea
                id="campusHistory"
                rows={4}
                value={campusData.history}
                onChange={(e) => handleChange("history", e.target.value)}
              />
            </div>

            <div className="p-4 border rounded-md bg-muted/50">
              <h3 className="font-medium mb-2">Observação</h3>
              <p className="text-sm text-muted-foreground">
                As informações do campus são importantes para contextualizar o documento PPC e devem ser mantidas
                atualizadas conforme as mudanças na instituição.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
