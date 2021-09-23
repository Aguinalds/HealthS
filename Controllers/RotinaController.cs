using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Health.controllers
{
    [ApiController]
    [Route("api/Status")]
    public class HealthController : ControllerBase
    {
        private static readonly string[]
            Rotina = new [] { "Cancelado ", "Em andamento ", "Aprovado" };

        //GET
        [HttpGet]
        public string Listar()
        {
            return string.Join("", Rotina);
        }

        [HttpGet("id")]
        public string GetStatus(int id)
        {
            return Rotina[id];
        }
        //POST
        //PUT
        //DELETE
    }
}
