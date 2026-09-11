"use client";
import { GithubIcon, LinkedinIcon } from "@/src/utils/icons";
import { Container } from "./container";
import { Mail } from "lucide-react";
import useModal from "@/src/Hooks/useModal";
import { Modal } from "../ui/modal";
import { EmailOptionsContent } from "../modalContents/emailOptionsContent";
import useLocale from "@/src/Hooks/useLocale";
import { profile } from "@/src/utils/profile-data";

export function Footer() {
  const { isOpen, close, open } = useModal();
  const { dict } = useLocale();
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={close}
        children={<EmailOptionsContent />}
        closeButton
      />
      <footer className="border-t border-surface-border mt-30">
        <Container className="flex flex-col items-center gap-6 py-10">
          <div className="w-full flex items-center justify-between">
            <p className="text-sm font-semibold text-foreground ">
              {profile.data.fullName}
            </p>
            <div className="flex items-center justify-center gap-3">
              <button className="w-10 h-10 rounded-full bg-surface border border-surface-border flex items-center justify-center cursor-pointer hover:bg-surface-hover">
                <GithubIcon />
              </button>
              <button className="w-10 h-10 rounded-full bg-surface border border-surface-border flex items-center justify-center cursor-pointer hover:bg-surface-hover">
                <LinkedinIcon />
              </button>
              <button
                onClick={() => open()}
                className="w-10 h-10 rounded-full bg-surface border border-surface-border flex items-center justify-center cursor-pointer hover:bg-surface-hover"
              >
                <Mail size={18} />
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 sm:flex-row  justify-between border-t border-surface-border pt-5">
            <p className="text-sm text-muted">{dict.footer.reserved}</p>
            <p className="text-sm text-muted">{dict.footer.built}</p>
          </div>
        </Container>
      </footer>
    </>
  );
}
