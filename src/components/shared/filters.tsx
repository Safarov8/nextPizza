import React from 'react'
import { Title } from './title'

type Props = {}

const Filters = (props: Props) => {
  return (
    <div>
      <Title text="Фильрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
    </div>
  );
}

export default Filters