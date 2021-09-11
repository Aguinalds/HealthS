using Microsoft.EntityFrameworkCore;

namespace models
{
    public class ExemploContext : DbContext
    {
        //public ExemploContext() : base("ConexaoExemplo"){}
        public DbSet<Paciente> Pacientes { get; set; }

        public DbSet<Consulta> Consultas { get; set; }

        public DbSet<Login> Login { get; set; }

        public DbSet<Remedio> Remedios { get; set; }

        public DbSet<Medico> Medicos { get; set; }

        public DbSet<Rotina> Rotinas { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder dbcob)
        {
            dbcob
                .UseSqlServer(@"Server=(localdb)\mssqllocaldb;
Database=HealthStar;Integrated Security=True");
        }
    }
}
