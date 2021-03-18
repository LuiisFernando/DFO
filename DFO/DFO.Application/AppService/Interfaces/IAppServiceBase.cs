﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace DFO.Application.AppService.Interfaces
{
    public interface IAppServiceBase<TEntity> where TEntity : class
    {
        TEntity Insert(TEntity model);

        Task<TEntity> InsertAsync(TEntity model);

        bool Update(TEntity model);

        Task<bool> UpdateAsync(TEntity model);

        bool Delete(TEntity model);

        Task<bool> DeleteAsync(TEntity model);

        bool Delete(Expression<Func<TEntity, bool>> where);

        Task<bool> DeleteAsync(Expression<Func<TEntity, bool>> where);

        bool Delete(params object[] Keys);

        Task<bool> DeleteAsync(params object[] Keys);

        TEntity Find(params object[] Keys);

        IEnumerable<TEntity> FindAll(Expression<Func<TEntity, bool>> where);

        Task<TEntity> FindAsync(params object[] Keys);

        TEntity Find(Expression<Func<TEntity, bool>> where);

        TEntity Find(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] includeProperties);

        IQueryable<TEntity> FindAll(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] includeProperties);

        Task<TEntity> FindAsync(Expression<Func<TEntity, bool>> where);

        IQueryable<TEntity> GetAll();

        IQueryable<TEntity> GetAll(params Expression<Func<TEntity, object>>[] includes);
    }
}
