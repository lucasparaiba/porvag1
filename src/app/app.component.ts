import {Component} from '@angular/core';
import {Ocorrencia} from './ocorrencia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editando = null;
  matricula = null;
  nome_aluno = null;
  data = null;
  paiscompareceram = false;
  nomedoresponsavel = null;
  observacao = null;
  tipo = null;
  excluir_ok = false;
  editar_ok = false;
  salvar_ok = false;
  selecionado = false;
  contadores = [0, 0, 0, 0];
  porcentagens = [0, 0, 0, 0];
  constructor(){
    this.obter_localStorage();
  }
  
  ocorrencias = [
    
  ];

  
  selecionar(status) {
    this.selecionado = status;
  }

  salvar() {
    const situacao = this.paiscompareceram;
    if (this.editando) {
      this.editando.matricula = this.matricula;
      this.editando.nome_aluno = this.nome_aluno;
      this.editando.data = this.data;
      this.editando.paiscompareceram = situacao;
      this.editando.nomedoresponsavel = this.nomedoresponsavel;
      this.editando.observacao = this.observacao;
      this.editando.tipo = this.tipo;
      this.editar_ok = true;
      this.gravar_localStorage(this.editando);
    } 
    else {
      const o = new Ocorrencia(this.matricula, this.nome_aluno, this.data, situacao,this.nomedoresponsavel, this.observacao, this.tipo);
      this.ocorrencias.push(o);
      this.salvar_ok = true;
      this.gravar_localStorage(o);
    }
    this.matricula = null;
    this.nome_aluno = null;
    this.data = null;
    this.paiscompareceram = false;
    this.nomedoresponsavel = null;
    this.observacao = null;
    this.tipo = null;
    this.editando = null;
  }

  excluir(ocorrencia) {
    this.redefinir();
    if (this.editando == ocorrencia) {
      alert('Você não pode excluir uma ocorrencia que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a Ocorrencia ?')) {
        const i = this.ocorrencias.indexOf(ocorrencia);
        this.remover_localStorage(ocorrencia);
        this.ocorrencias.splice(i, 1);
        this.excluir_ok = true;
      }
    }
  }

  editar(ocorrencia) {
    this.redefinir();
    this.matricula = ocorrencia.matricula;
    this.nome_aluno = ocorrencia.nome_aluno;
    this.data = ocorrencia.data;
    this.paiscompareceram = ocorrencia.paiscompareceram;
    this.nomedoresponsavel = ocorrencia.nomedoresponsavel;
    this.observacao = ocorrencia.observacao;
    this.tipo = ocorrencia.tipo;
    this.editando = ocorrencia;
  }

  cancelar() {
    this.redefinir();
  }

  redefinir() {
    this.matricula = null;
    this.nome_aluno = null;
    this.data = null;
    this.paiscompareceram = false;
    this.nomedoresponsavel = null;
    this.observacao = null;
    this.tipo = null;
    this.editando = null;
    this.excluir_ok = false;
    this.salvar_ok = false;
    this.editar_ok = false;
  }
    gravar_localStorage(ocorrencia){
        localStorage.setItem((ocorrencia.matricula).toString(), JSON.stringify(ocorrencia));
    }

    obter_localStorage(){
        for(const i in localStorage){
            const d = JSON.parse(localStorage.getItem(i));
            if(d != undefined){
                this.ocorrencias.push(d);
            }

        }
    }

    remover_localStorage(ocorrencia){
        localStorage.removeItem((ocorrencia.matricula).toString());
    }

}
