
import {FiscalYear}  from './model/fiscalyear-data';
import { InMemoryDbService } from 'angular-in-memory-web-api';


export class FiscalYearData implements InMemoryDbService {
  createDb(){
    const fiscalYears: FiscalYear[] = [
      { id: 1, yearDescription: '2016', startDate: '2016-01-01', endDate: '2016-12-31', isCurrent : false, isOpen : false  },
      { id: 2, yearDescription: '2017', startDate: '2017-01-01', endDate: '2017-12-31', isCurrent : false, isOpen : false  },
      { id: 3, yearDescription: '2018', startDate: '2018-01-01', endDate: '2018-12-31' , isCurrent : false, isOpen : false },
      { id: 4, yearDescription: '2019', startDate: '2019-01-01', endDate : '2019-12-31', isCurrent : false, isOpen : false },
      { id: 5, yearDescription: '2020', startDate: '2020-01-01', endDate: '2020-12-31', isCurrent : false, isOpen : false  }

    ];
    
    return {fiscalYears};
  }
}
