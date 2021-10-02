using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using models;

    public class Banco : DbContext
    {
        public Banco (DbContextOptions<Banco> options)
            : base(options)
        {
        }

        public DbSet<models.Login> Login { get; set; }
    }
