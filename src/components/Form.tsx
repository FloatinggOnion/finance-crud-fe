import { FieldValues, useForm } from "react-hook-form";


interface Props {
  onSubmit: (data: FieldValues) => void;
}

const Form = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      className="flex flex-col gap-6 p-3 justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex md:flex-row justify-between sm:flex-col">
        <div className="flex flex-row justify-center items-center gap-4">
          <label htmlFor="amount" className="font-semibold">
            Amount
          </label>
          <input
            {...register("amount", { required: true, valueAsNumber: true})}
            type="text"
            id="amount"
            className="h-10 border-accent p-2 border-2 rounded-md w-[100%]"
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <label htmlFor="category" className="font-semibold">
            Category
          </label>
          <input
            {...register("category", { required: true })}
            type="text"
            id="category"
            className="h-10 border-accent p-2 border-2 rounded-md w-[100%]"
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <input
            {...register("description", { required: true })}
            type="text"
            id="description"
            className="h-10 border-accent p-2 border-2 rounded-md w-[100%]"
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <label htmlFor="income" className="font-semibold">
            Income?
          </label>
          <input
            {...register("is_income", { required: false })}
            type="checkbox"
            id="income"
            className="h-[2rem] w-[2rem] p-2 border-2 border-accent"
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <label htmlFor="date" className="font-semibold">
            Date
          </label>
          <input
            {...register("date", { required: true })}
            type="date"
            id="date"
            className="h-[100%] w-[100%]"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary text-white font-semibold px-4 py-2 rounded-md mx-auto"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default Form;
