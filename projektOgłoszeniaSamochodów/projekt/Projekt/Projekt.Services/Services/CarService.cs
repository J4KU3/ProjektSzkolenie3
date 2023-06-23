using Microsoft.EntityFrameworkCore;
using Projekt.Migration;
using Projekt.Model.Models;
using Projekt.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projekt.Services.Services
{
    public class CarService : ICarService
    {
        private static List<CarModel> car;

        private readonly DataContext _context;
        public CarService(DataContext context)
        {
            var result = car;
            _context = context;
        }

        public async Task<List<CarModel>> AddCar(CarModel car)
        {
            _context.Cars.Add(car);
            await _context.SaveChangesAsync();

            return await _context.Cars.ToListAsync();
        }

        public async Task<List<CarModel>> DeleteCar(int id)
        {
            var result = await _context.Cars.FindAsync(id);

            if (result == null)
                return null;

            _context.Cars.Remove(result);
            await _context.SaveChangesAsync();


            return await _context.Cars.ToListAsync();
        }

        public async Task<List<CarModel>> GetAllCars()
        {
            return await _context.Cars.ToListAsync();
        }

        public async Task<CarModel> GetCar(int id)
        {
            var result = await _context.Cars.FindAsync(id);

            if (result == null)
                return null;

            return result;
        }

        public async Task<List<CarModel>> UpdateCar(CarModel car, int id)
        {
            var result = await _context.Cars.FindAsync(id);

            if (result == null)
                return null;
            result.ProductYear = car.ProductYear;
            result.Brand = car.Brand;
            result.Engine = car.Engine;
            result.Model = car.Model;
            await _context.SaveChangesAsync();

            return await _context.Cars.ToListAsync();

        }
    }
}
