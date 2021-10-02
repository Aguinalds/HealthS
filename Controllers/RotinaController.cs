using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using models;

namespace Health.controllers
{
    [ApiController]
    [Route("api/Rotina")]
    public class HealthController : ControllerBase
    {
        private static readonly string[]
            Rotina =
                new [] { "Cancelado ", "Em andamento ", "Aprovado ", "", "" };

        //GET
        [HttpGet]
        public string Listar()
        {
            return string.Join("", Rotina);
        }

        [HttpGet("id")]
        public string GetRotina(int id)
        {
            return Rotina[id];
        }

        //POST
        [HttpPost]
        public string Incluir(Rotina rotina)
        {
            Rotina[rotina.Id] = rotina.Nome;
            return string.Join("", Rotina);
        }

        //PUT
        [HttpPut("{id}")]
        public string Atualizar(int id, Rotina rotina)
        {
            Rotina[id] = rotina.Nome;
            return string.Join("", Rotina);
        }

        //DELETE
        [HttpDelete("{id}")]
        public string Excluir(int id)
        {
            Rotina[id] = "";
            return string.Join("", Rotina);
        }
    }
}
