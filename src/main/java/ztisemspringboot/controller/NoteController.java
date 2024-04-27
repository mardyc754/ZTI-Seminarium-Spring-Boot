package ztisemspringboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ztisemspringboot.model.Note;
import ztisemspringboot.service.NoteService;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/note")
public class NoteController {
    @Autowired
    private NoteService noteService;

    @PostMapping("/create")
    public Map<String, Object> create(@RequestBody Map<String, Object> request)
    {
        Note note = Note.builder()
                .title((String) request.get("title"))
                .content((String) request.get("content"))
                .lastModified(new Timestamp(System.currentTimeMillis()))
                .build();

        noteService.create(note);

        Map<String, Object> response = new HashMap<>();
        response.put("success", "true");
        response.put("note", note);
            return response;
    }

    @GetMapping("/list")
    public Map<String, Object> list()
    {
        List<Note> notes = noteService.list();

        Map<String, Object> response = new HashMap<>();
        response.put("success", "true");
        response.put("notes", notes);
        return response;
    }

    @GetMapping("/get")
    public Map<String, Object> get(@RequestParam Long id)
    {
        Note note = noteService.get(id);

        Map<String, Object> response = new HashMap<>();
        response.put("success", "true");
        response.put("note", note);
        return response;
    }

    @PutMapping("/update")
    public Map<String, Object> update(@RequestBody Map<String, Object> request)
    {
        Note note = Note.builder()
                .id(Long.parseLong((String) request.get("id")))
                .title((String) request.get("title"))
                .content((String) request.get("content"))
                .lastModified(new Timestamp(System.currentTimeMillis()))
                .build();

        noteService.update(note);

        Map<String, Object> response = new HashMap<>();
        response.put("success", "true");
        response.put("note", note);
        return response;
    }

    @DeleteMapping("/delete/{id}")
    public Map<String, Object> delete(@PathVariable Long id)
    {
        noteService.delete(id);

        Map<String, Object> response = new HashMap<>();
        response.put("success", "true");
        return response;
    }
}
