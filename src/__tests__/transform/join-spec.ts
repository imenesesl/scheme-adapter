import { MathOperationsScheme } from '../scheme';
import { mathOperationsTransform } from './transforms';

describe('JOIN MATH', () => {
  const data2021Model = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
    CurrentYear: 2021,
    BirthDate: 1995,
    DaysPerYear: 365,
    MonthsPerYear: 12,
    HoursPerDay: 24,
  };

  const mathOperations = mathOperationsTransform(data2021Model);

  test('sum', () => {
    expect(mathOperations.sum).toBe(data2021Model.DaysPerYear);
  });

  test('rest', () => {
    expect(mathOperations.rest).toBe(data2021Model.CurrentYear - data2021Model.BirthDate);
  });

  test('divided', () => {
    expect(mathOperations.divided).toBe(data2021Model.DaysPerYear / data2021Model.MonthsPerYear / data2021Model.HoursPerDay);
  });

  test('multiply', () => {
    expect(mathOperations.multiply).toBe(data2021Model.DaysPerYear * data2021Model.HoursPerDay);
  });

  test('general', () => {
    expect(JSON.stringify(Object.keys(mathOperations))).toBe(JSON.stringify(Object.keys(MathOperationsScheme)));
  });
});
