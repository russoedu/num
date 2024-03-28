// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{menu::{Menu, SubmenuBuilder}, utils::platform::Target};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let handle = app.handle();
            
            let file_menu = SubmenuBuilder::new(handle, "File")
                .close_window()
                .quit()
                .build()?;

            let edit_menu = SubmenuBuilder::new(handle, "Edit")
                .cut()
                .copy()
                .paste()
                .build()?;

            let window_menu_windows = SubmenuBuilder::new(handle, "Window")
                .maximize()
                .minimize()
                .separator()
                .hide()
                .hide_others()
                .build()?;
            
            let window_menu_mac = SubmenuBuilder::new(handle, "Window")
                .fullscreen()
                .separator()
                .maximize()
                .minimize()
                .separator()
                .hide()
                .hide_others()
                .show_all()
                .build()?;

            let about_menu = SubmenuBuilder::new(handle, "About")
                .build()?;

            let menu = Menu::new(handle)?;

            menu.append(&file_menu)?;
            menu.append(&edit_menu)?;

            if Target::current() == Target::Windows {
                menu.append(&window_menu_windows)?;
            } else if Target::current() == Target::MacOS {
                menu.append(&window_menu_mac)?;
            }

            menu.append(&about_menu)?;

            let _ = app.set_menu(menu);
            
            Ok(())
        })
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
