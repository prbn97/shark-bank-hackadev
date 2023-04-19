using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sharp_coders_hackadev.Data;
using sharp_coders_hackadev.Models;

namespace sharp_coders_hackadev.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContaController : ControllerBase
    {
        private readonly SharkBankDbContext _context;

        public ContaController(SharkBankDbContext context)
        {
            _context = context;
        }

        // GET: api/Conta
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Conta>>> GetContas()
        {
            return await _context.Contas.ToListAsync();
        }

        // GET: api/Conta/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Conta>> GetConta(string id)
        {
            var conta = await _context.Contas.FindAsync(id);

            if (conta == null)
            {
                return NotFound();
            }

            return conta;
        }

        // PUT: api/Conta/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConta(string id, Conta conta)
        {
            if (id != conta.Id)
            {
                return BadRequest();
            }

            _context.Entry(conta).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Conta
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Conta>> PostConta(Conta conta)
        {
            _context.Contas.Add(conta);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ContaExists(conta.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetConta", new { id = conta.Id }, conta);
        }

        // DELETE: api/Conta/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConta(string id)
        {
            var conta = await _context.Contas.FindAsync(id);
            if (conta == null)
            {
                return NotFound();
            }

            _context.Contas.Remove(conta);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContaExists(string id)
        {
            return _context.Contas.Any(e => e.Id == id);
        }
    }
}
