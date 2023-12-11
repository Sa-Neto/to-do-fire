import { useState } from "react";
import { AreaContent, Container, Content, FormContent, TextTask, ViewButton } from "./styles";
import { Button } from "../../componets/Button";
import { Input } from "../../componets/Input/Input";
import { ErrorMessage } from "../../componets/ErroMessage";

export function AddTaks(){
  const [task, setTask] = useState('');

  async function handleTask(){
    if(task === ""  ){
      return alert('Preencha todos o Campo')
    }
    
  }

  return(
    <Container>
      <AreaContent>
        <Content>
          <TextTask>Nova task </TextTask>
          <FormContent>
           <Input
            placeholder="Nome da sua tarefa"
            value={task}
            setValue={setTask}
           /> 
          </FormContent>
        </Content>
        <Button text="Cadastrar Task" handle={handleTask}/>
      </AreaContent>
    </Container>
  )
}