using System;

namespace models
{
    public class Paciente
    {
        public int Id { get; set; }

        public string Cpf { get; set; }

        public string Nome { get; set; }

        public string Email { get; set; }

        public string Ala { get; set; }

        public DateTime Nascimento { get; set; }
    }
}
