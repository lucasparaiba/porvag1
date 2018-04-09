export class Ocorrencia {
    matricula: string;
    nome_aluno:string;
    data: Date;
    paiscompareceram: boolean;
    nomedoresponsavel:string;
    observacao: string;
    tipo: number;
    
    

    constructor(matricula: string, nome_aluno: string, data?: Date, paiscompareceram?: boolean,nomedoresponsavel?:string, observacao?: string, tipo?: number) {
        this.matricula = matricula;
        this.nome_aluno = nome_aluno;
        this.data = data;
        this.paiscompareceram = paiscompareceram;
        this.nomedoresponsavel = nomedoresponsavel;
        this.observacao = observacao;
        this.tipo = tipo;
    }
}
