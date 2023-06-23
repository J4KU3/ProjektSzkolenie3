using Microsoft.EntityFrameworkCore;
using Projekt.Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projekt.Migration
{
    public class DataContext:DbContext
    {
        public DataContext() { }
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=DESKTOP-KNRTMSN;Database=CarsDB;Trusted_Connection=True;TrustServerCertificate=true;");

           
        }

        public DbSet<CarModel> Cars { get; set; }
    }
}
