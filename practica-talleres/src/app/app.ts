import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Talleres Disponibles';

  talleres = signal([
    { id: 1, name: 'Introducción a HTML', duracion: '2 horas' },
    { id: 2, name: 'CSS básico', duracion: '3 horas' },
    { id: 3, name: 'JavaScript', duracion: '4 horas' },
    { id: 4, name: 'Angular', duracion: '4 horas' },
    { id: 5, name: 'React', duracion: '5 horas' },
  ]);

 inscritos = signal<number[]>([]);

  inscribirse(id: number) {

    // Evita inscribirse dos veces
    if (this.inscritos().includes(id)) {
      return;
    }

    // Máximo de 2 talleres
    if (this.inscritos().length >= 2) {
      return;
    }

    // Agrega el nuevo ID sin modificar el arreglo original
    this.inscritos.update((current) => [
      ...current,
      id
    ]);
  }

  cancelarInscripcion(id: number) {

    this.inscritos.update((current) =>
      current.filter((tallerId) => tallerId !== id)
    );
  }

  talleresSeleccionados() {

    return this.talleres().filter((taller) =>
      this.inscritos().includes(taller.id)
    );
  }

  cancelarTodas() {

    this.inscritos.set([]);
  }
}