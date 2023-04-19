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
    public class TransacaoController : ControllerBase
    {
        private readonly SharkBankDbContext _context;

        public TransacaoController(SharkBankDbContext context)
        {
            _context = context;
        }

        // GET: api/Transacao
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transacao>>> GetTransacoes()
        {
            return await _context.Transacoes.ToListAsync();
        }

        // GET: api/Transacao/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Transacao>> GetTransacao(string id)
        {
            var transacao = await _context.Transacoes.FindAsync(id);

            if (transacao == null)
            {
                return NotFound();
            }

            return transacao;
        }

        // PUT: api/Transacao/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTransacao(string id, Transacao transacao)
        {
            if (id != transacao.Id)
            {
                return BadRequest();
            }

            _context.Entry(transacao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransacaoExists(id))
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

        // POST: api/Transacao
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Transacao>> PostTransacao(Transacao transacao)
        {
            _context.Transacoes.Add(transacao);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TransacaoExists(transacao.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTransacao", new { id = transacao.Id }, transacao);
        }

        // DELETE: api/Transacao/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTransacao(string id)
        {
            var transacao = await _context.Transacoes.FindAsync(id);
            if (transacao == null)
            {
                return NotFound();
            }

            _context.Transacoes.Remove(transacao);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TransacaoExists(string id)
        {
            return _context.Transacoes.Any(e => e.Id == id);
        }
    }
}
