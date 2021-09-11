using System;
using System.Collections.Generic;

namespace models
{
    public class Consulta
    {
        public int Id { get; set; }

        public string Medico { get; set; }

        public string Especialidade { get; set; }

        public DateTime Data { get; set; }

        public Paciente Paciente { get; set; }

        public Consulta()
        {
            Consultas = new List<Consulta>();
        }

        public List<Consulta> Consultas { get; set; }
    }
}
