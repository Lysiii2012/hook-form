import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; 

const schema = yup
  .object({
    todo: yup.string().min(8, 'Need more than 8 symbols').required(),
  })
  .required();

const HookForm = ({ onAddTodo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit", 
  });

  const onSubmit = (data) => {
    onAddTodo(data.todo);
    reset();  
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("todo")} /> 
      {errors.todo && <p>{errors.todo.message}</p>}
      <input type="submit" />
    </form>
  );
};

export default HookForm;
