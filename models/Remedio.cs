using System.Collections.Generic;

namespace models
{
    public class Remedio
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Tarjamento { get; set; }

        public string Dosagem { get; set; }

        public Remedio()
        {
            Remedios = new List<Remedio>();
        }

        public List<Remedio> Remedios { get; set; }
    }
}
