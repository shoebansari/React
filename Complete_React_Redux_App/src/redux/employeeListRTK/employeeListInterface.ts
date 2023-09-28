export function rtkPayload<T>() {
  return (t: T) => ({ payload: t });
}

export interface IEmployeeListRTK {
  employeelist:IEmployeelist,
  loading:boolean;
}

interface IEmployeelist {
  id:number,
  first_name:string,
  last_name:string,
  email:string
}