import prompt from 'prompt-sync'

import createEvenNewtonPolynom from './evenInterpolation'
import { createLagrangePolynom, createNewtonPolynom } from './interpolation'
import task from "./task"

const main = () => {
  const pt = prompt({ sigint: true });
  const n = +pt("Enter n: ");
  const table = task.genTable(n);
  const evTable = task.genEvenlyTable(n);
  console.log(table);
  console.log(evTable);

  const lpl = createLagrangePolynom(table);
  const npl = createNewtonPolynom(table);
  const nepl = createEvenNewtonPolynom(evTable);

  const x = +pt("Enter x [-2, 2]: ");
  const f_x     = task.f(x),
        lpl_x   = lpl(x),
        npl_x   = npl(x),
        nepl_x  = nepl(x);

  console.log(`f(${x}) =`, f_x);
  console.log(`F_Lagrange(${x}) =`, lpl_x, `, deviation is ${Math.abs(f_x - lpl_x)}`);
  console.log(`F_Newton(${x}) =`, npl_x, `, deviation is ${Math.abs(f_x - npl_x)}`);
  console.log(`F_EvenlyNewton(${x}) =`, nepl_x, `, deviation is ${Math.abs(f_x - nepl_x)}`);
}

main();