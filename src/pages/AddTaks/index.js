import { useContext, useState } from "react";
import { AreaContent, Container, Content, FormContent, TextTask, ViewButton } from "./styles";
import { Button } from "../../componets/Button";
import { Input } from "../../componets/Input/Input";
import { ErrorMessage } from "../../componets/ErroMessage";
import { AuthContext } from "../../contexts/AuthContext";
import { useCreateTaks } from "../../hooks/useCreateTaks";

export function AddTaks(){
  const [task, setTask] = useState('');
  const {user} = useContext(AuthContext);
  const {createTask} = useCreateTaks();
  
  async function handleTask(){
    
    if(task === ""  ){
      return alert('Preencha todos o Campo')
    }
    console.log(user)

    await createTask(user.uid,task)
    
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