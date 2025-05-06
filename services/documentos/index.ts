import { InfoDocumento } from "@/interfaces/documentos";
import { client } from "..";
import axios from "axios";

export async function atualizar_documento(info: InfoDocumento): Promise<string> {
  try {
    const response = await client.patch<string>("/atualizar_documento", info);

    if (response.status === 200) {
      return response.data;
    }

    throw new Error(
      `Erro ao atualizar documento. Status code: ${response.status} | Erro: ${response.statusText}`
    );
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status ?? "Sem status";
      const message = error.response?.data || error.message || "Sem mensagem";
      throw new Error(`Erro ao atualizar documento: ${status} | ${message}`);
    } else {
      throw new Error(`Erro desconhecido ao atualizar documento: ${String(error)}`);
    }
  }
}
