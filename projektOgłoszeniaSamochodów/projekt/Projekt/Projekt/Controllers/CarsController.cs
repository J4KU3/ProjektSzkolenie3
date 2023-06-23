using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Projekt.Model.Models;
using Projekt.Services.Interfaces;
using Projekt.Services.Services;

namespace Projekt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly ICarService _carservice;
        private readonly IWebHostEnvironment _environment;

        public CarsController(ICarService carService, IWebHostEnvironment environment)
        {
            _carservice = carService;
            _environment = environment;
        }

        
        [HttpGet]
        public async Task<ActionResult<List<CarModel>>> GetAllCars()
        {
            var result = await _carservice.GetAllCars();

            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CarModel>> GetCar(int id)
        {
            var result = await _carservice.GetCar(id);

            if (result == null)
                return NotFound("Car doesn't exists");

            return Ok(result);
        }

        
        
        
        [HttpPost]
        public async Task<ActionResult<List<CarModel>>> AddCar(CarModel car)
        {
            var result = await _carservice.AddCar(car);

            return Ok(result);
        }


        
        [HttpPut("{id}")]
        public async Task<ActionResult<List<CarModel>>> UpdateCar([FromRoute] int id, CarModel car)
        {
            var result = await _carservice.UpdateCar(car, id);

            if (result == null)
                return NotFound("Car doesn't exists");



            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<CarModel>> DeleteCar(int id)
        {
            var result = await _carservice.DeleteCar(id);

            if (result == null)
                return NotFound("Car doesn't exists");



            return Ok(result);
        }


    }
}

