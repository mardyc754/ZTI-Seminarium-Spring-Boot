package ztisemspringboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ztisemspringboot.model.Note;
import ztisemspringboot.repository.NoteRepository;

import java.util.List;
import java.util.Set;

@Service
public class NoteService {
    @Autowired
    private NoteRepository noteRepository;

    public void create(Note note) {
        noteRepository.save(note);
    }

    public void update(Note note) {
        noteRepository.save(note);
    }

    public void delete(Long id) {
        noteRepository.deleteById(id);
    }

    public List<Note> list() {
        return noteRepository.findAll();
    }

    public Note get(Long id) {
        return noteRepository.findById(id).orElse(null);
    }
}
