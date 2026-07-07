"use client";

import { useActionState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import type { Airport } from "@/lib/types";
import { updateAirport } from "@/app/actions/airports";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-60 disabled:cursor-not-allowed";

const sectionClass =
  "bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 space-y-5";

type Props = {
  airport: Airport;
  cityName: string;
  stateName: string;
};

export function EditAirportForm({ airport, cityName, stateName }: Props) {
  const [state, action, pending] = useActionState(updateAirport, {});
  const backHref = `/airports/${airport.icao.toLowerCase()}`;

  return (
    <form action={action} className="space-y-10">
      <input type="hidden" name="airportId" value={airport.id} />

      {state.success && (
        <div className="flex items-center justify-center gap-2 text-sm text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg px-4 py-3">
          <CheckCircle size={16} />
          <span>
            Changes saved.{" "}
            <Link href={backHref} className="font-semibold underline">
              View airport
            </Link>
          </span>
        </div>
      )}

      {/* Identifiers */}
      <div className={sectionClass}>
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Airport Identifiers
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            ICAO is used as the canonical URL slug and can&apos;t be changed
            here. IATA and FAA LID are optional alternate identifiers.
          </p>
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1"
          >
            Airport Name <span className="text-rose-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={airport.name}
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="icao"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1"
            >
              ICAO Code
            </label>
            <input
              id="icao"
              type="text"
              disabled
              defaultValue={airport.icao}
              maxLength={4}
              className={`${inputClass} uppercase`}
            />
            <p className="text-xs text-slate-400 mt-1">4-letter code</p>
          </div>
          <div>
            <label
              htmlFor="iata"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1"
            >
              IATA Code
            </label>
            <input
              id="iata"
              name="iata"
              type="text"
              defaultValue={airport.iata ?? ""}
              maxLength={3}
              className={`${inputClass} uppercase`}
            />
            <p className="text-xs text-slate-400 mt-1">3-letter code</p>
          </div>
          <div>
            <label
              htmlFor="faaLid"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1"
            >
              FAA LID
            </label>
            <input
              id="faaLid"
              name="faaLid"
              type="text"
              defaultValue={airport.faaLid ?? ""}
              maxLength={5}
              className={`${inputClass} uppercase`}
            />
            <p className="text-xs text-slate-400 mt-1">Local identifier</p>
          </div>
        </div>
      </div>

      {/* Location — read-only: derived from catalog records */}
      <div className={sectionClass}>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Location
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1"
            >
              City
            </label>
            <input
              id="city"
              type="text"
              disabled
              defaultValue={cityName}
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1"
            >
              State
            </label>
            <input
              id="state"
              type="text"
              disabled
              defaultValue={stateName}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className={sectionClass}>
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Description
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Shown on the airport detail page. Brief overview of the airport,
            its history, or what makes it notable for flight training.
          </p>
        </div>

        <textarea
          id="description"
          name="description"
          rows={5}
          defaultValue={airport.description ?? ""}
          placeholder="e.g. Falcon Field Airport is a public general aviation airport located in Mesa, Arizona…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {state.error && (
        <p className="text-sm text-rose-600 dark:text-rose-400 text-center">
          {state.error}
        </p>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={pending}
          className="flex-1 py-4 bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-bold text-lg rounded-xl transition"
        >
          {pending ? "Saving…" : "Save Changes"}
        </button>
        <Link
          href={backHref}
          className="flex-1 py-4 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-bold text-lg rounded-xl transition text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
