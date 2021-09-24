using System;
using System.Collections.Generic;

namespace models
{
    public class Rotina
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public DateTime Data { get; set; }

        public List<Consulta> Consultas { get; set; }

        public List<Remedio> Remedios { get; set; }
    }
}
