using System;

namespace models
{
    public class Medico
    {
        public int Id { get; set; }

        public string Cpf { get; set; }

        public string Nome { get; set; }

        public string Email { get; set; }

        public string Especialidade { get; set; }

        public DateTime Nascimento { get; set; }
    }
}
