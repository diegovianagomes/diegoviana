import { parseISO } from 'date-fns';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Props {
  dateString: string;
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
    </time>
  );
};

export default DateFormatter;
