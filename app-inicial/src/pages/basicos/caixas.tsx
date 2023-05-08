import Caixa from "@/components/basicos/Caixa";

export default function PaginaCaixa(){
    return(
        <div className="flex gap-7 p-7">
            <Caixa>Caixa #1</Caixa>
            <Caixa>Caixa #2</Caixa>
            <Caixa>
                <ul className="list-disc">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </Caixa>
        </div>
    );
}