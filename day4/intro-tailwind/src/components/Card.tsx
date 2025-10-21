import { HiOutlineDocumentText } from "react-icons/hi";

interface CardProps {
  title: string;
}

function Card(props: CardProps) {
  return (
    <div className="h-[280px] bg-[#F5FCFF] rounded-lg p-8 space-y-4">
      <div className="bg-white w-[50px] h-[50px] flex justify-center items-center rounded-lg shadow">
        <HiOutlineDocumentText className="text-4xl" />
      </div>

      <p className="text-lg font-bold">{props.title}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
    </div>
  );
}

export default Card;
