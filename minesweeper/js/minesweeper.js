export class Sentence
{
 constructor(cells, count)
 {
  this.cells = new Set(cells);
  this.count = count;
 }

 equal(other)
 {
  if((this.count !== other.count) || (this.cells.size !== other.cells.size)) return false;
  for(var a of this.cells)
   if(!other.cells.has(a))
    return false;
  return true;
 }

 known_mines()
 {
  //Возвращает ячейки, о которых извсестно, что они мины.
  //--------------------------------Реализуйте самостоятельно-----------
  if(this.cells.size == this.count && this.cells.size != 0)

   return new Set(this.cells);
  else
   return new Set()
 }

 known_safes()
 {
  //Возвращает ячейки, о которых известно, что они безопасны.
  //--------------------------------Реализуйте самостоятельно-----------
  if(this.count == 0 && this.cells.size != 0)

   return new Set(this.cells);
  else
   return new Set()
 }

 mark_safe(cell)
 {
  //Обновляет внутреннее представление знаний,
  //учитывая, что ячейка изсвестна как безопасная.
  //--------------------------------Реализуйте самостоятельно-----------
  if(this.cells.has(cell))
   this.cells.delete(cell);
 }


 mark_mine(cell)
 {
  //Обновляет внутреннее представление знаний,
  //учитывая, что ячейка изсвестна как мина.
  //--------------------------------Реализуйте самостоятельно-----------
 if(this.cells.has(cell))
  {
   this.cells.delete(cell);
  // this.count = this.count - 1;
   --this.count;
  }
 }

 infer_from(other)
 {
  let set1 = this.cells;
  let set2 = other.cells;
  if(isSubSet(set1, set2))
  {
   let set3 = difference(set2, set1);
   return new Sentence(set3, other.count - this.count);
  }
  else if(isSubSet(set2, set1))
  {
   let set3 = difference(set1, set2);
   return new Sentence(set3, this.count - other.count);
  }
  else return 0;
 }
}


export class MinesweeperAI
{
 constructor(dimension)
 {
  //Ширина и высота поля игры
  this.dimension = dimension;

  //Следит за тем, какие ячейки были нажаты
  this.moves_made = new Set();

  //Следит за ячейками, которые считаются безопасными или минами
  this.mines = new Set();
  this.safes = new Set();
  this.knowledge = [];
 }

 mark_mine(cell)
 {
  //Помечает ячейку как мину и обновляет все знания,
  //чтобы пометить эту ячейку как мину.
  this.mines.add(cell);
  this.knowledge.forEach(sentence => sentence.mark_mine(cell));
 }

 mark_safe(cell)
 {
  //Помечает ячейку как безопасную и обновляет все знания,
  //чтобы пометить эту ячейку как безопасную.
  this.safes.add(cell);
  this.knowledge.forEach(sentence => sentence.mark_safe(cell));
 }


 add_knowledge(cell, count)
 {
  /* Вызывается, когда доска "Сапёр" сообщает нам,
   * для данной безопасной ячейки, сколько соседей имеют мины.
   *
   * Эта функция должна:
   * 1) пометить ячейку как сделанный ход
   * 2) пометить ячейку как безопасную
   * 3) добавить новое предложение в базу знаний
   * на основе значений cell и count
   * 4) пометить дополнительные ячейки как безопасные или как мины,
   * если это можно сделать на основе базы знаний ИИ.
   * 5) добавить новые предложения в базу знаний если они могут
   * быть выведены из существующих знаний.
   */
  //--------------------------------Реализуйте самостоятельно-----------
 }

 make_safe_move()
 {
  /* Возвращает безопасную ячейку для выбора на поле Сапёра.
   * Ход должен быть известен как безопасный и ещё не был сделан.
   * Функция может использовать this.mines, this.safes, this.moves_made,
   * но не должна их изменять.
   */
  //--------------------------------Реализуйте самостоятельно-----------
 }

 make_random_move()
 {
  /*Возваращает ход, который надо сделать на доске Сапёра.
   * Следует выбрать случайным образом среди ячеек, которые:
   * 1) ещё не выбрали
   * 2) не известно, что это мины.
   */
  //--------------------------------Реализуйте самостоятельно-----------
 }





}