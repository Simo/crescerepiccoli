module ProjectsHelper

  # Per presentare la data di inizio progetto
  # una semplice formattazione
  def presenta_data_inizio data
    format_date data
  end

  # Per presentare la data di conclusione di un progetto
  # Il metodo controlla l'identità delle data di inizio e fine del progetto
  # L'uguaglianza di data inizio e data fine significa che il progetto è ancora in corso
  # in tal caso viene mostrato all'utente il testo "in corso"
  def presenta_data_conclusione progetto
    if progetto.started_at == progetto.finished_at
      "in corso"
    else
      format_date progetto.finished_at
    end
  end


  # Imposta classe adeguata per l'attività
  # solo una ogni 4 deve avere la classe 'first'
  def class_for_activity index
    if index%4 == 0
      "portfolio dt-sc-one-fourth column first"
    else
      "portfolio dt-sc-one-fourth column"
    end
  end

  # Rivela se è stata richiesta una nuova immagine da caricare
  # vuole impedire di poter caricare una nuova immagine
  # al posto di una vecchia
  def new_image object
    object.created_at == nil
  end

  private

  def format_date data
    data.strftime("%d/%m/%Y")
  end

end
