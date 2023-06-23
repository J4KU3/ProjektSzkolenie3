using Projekt.Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projekt.Services.Interfaces
{
    public interface ICarService
    {
        Task<List<CarModel>> GetAllCars();
        Task<CarModel> GetCar(int id);
        Task<List<CarModel>> AddCar(CarModel car);
        Task<List<CarModel>> UpdateCar(CarModel car, int id);
        Task<List<CarModel>> DeleteCar(int id);

    }
}
