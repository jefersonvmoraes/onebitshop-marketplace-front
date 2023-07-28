
import React, { useState } from 'react'
import { DescriptionTxt, ReadMoreLess } from './styled';

interface Props {
  desc: string;
}

const Description = ({ desc }: Props) => {

  const [readMoreText, setReadMoretext] = useState("Ler mais");
  const [numbersOfLines, setNumbersOfLines] = useState(3);

  const handleReadMore = (numberLines: number) => {
    if(numbersOfLines != 3){
      setReadMoretext("Ler mais");
      setNumbersOfLines(3);
    } else {
      setReadMoretext("Ler menos");
      setNumbersOfLines(1000);
    }
  }

  return (
    <>
      <DescriptionTxt numberOfLines={numbersOfLines}>{desc}</DescriptionTxt>

      {desc.length >= 115 ? <ReadMoreLess onPress={()=>{handleReadMore(numbersOfLines)}}>{readMoreText}</ReadMoreLess> : null }
    </>
  )
}

export default Description