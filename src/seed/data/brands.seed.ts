
import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';


export const BRAND_SEED: Brand[]=[
    {
        id: uuid(),
        name: 'Toyota',
        createAt: new Date().getTime()
      },
      {
        id: uuid(),
        name: 'Kia',
        createAt: new Date().getTime()
      },
      {
        id: uuid(),
        name: 'Chevrolet',
        createAt: new Date().getTime()
      }
]