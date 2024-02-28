import {ICacheService} from "@interfaces/cache_service";
import {ILoggingService} from "@interfaces/logging_service";
import {IMetadataService} from "@interfaces/metadata_service";
import {IProcessTorrentsJob} from "@interfaces/process_torrents_job";
import {ITorrentDownloadService} from "@interfaces/torrent_download_service";
import {ITorrentEntriesService} from "@interfaces/torrent_entries_service";
import {ITorrentFileService} from "@interfaces/torrent_file_service";
import {ITorrentProcessingService} from "@interfaces/torrent_processing_service";
import {ITorrentSubtitleService} from "@interfaces/torrent_subtitle_service";
import {ITrackerService} from "@interfaces/tracker_service";
import {ProcessTorrentsJob} from "@jobs/process_torrents_job";
import {DatabaseRepository} from "@repository/database_repository";
import {IDatabaseRepository} from "@repository/interfaces/database_repository";
import {CacheService} from "@services/cache_service";
import {LoggingService} from "@services/logging_service";
import {MetadataService} from "@services/metadata_service";
import {TorrentDownloadService} from "@services/torrent_download_service";
import {TorrentEntriesService} from "@services/torrent_entries_service";
import {TorrentFileService} from "@services/torrent_file_service";
import {TorrentProcessingService} from "@services/torrent_processing_service";
import {TorrentSubtitleService} from "@services/torrent_subtitle_service";
import {TrackerService} from "@services/tracker_service";
import {ICompositionalRoot, CompositionalRoot} from "@setup/composition_root";
import {IocTypes} from "@setup/ioc_types";
import {Container} from "inversify";

const serviceContainer = new Container();

serviceContainer.bind<ICompositionalRoot>(IocTypes.ICompositionalRoot).to(CompositionalRoot).inSingletonScope();
serviceContainer.bind<ICacheService>(IocTypes.ICacheService).to(CacheService).inSingletonScope();
serviceContainer.bind<ILoggingService>(IocTypes.ILoggingService).to(LoggingService).inSingletonScope();
serviceContainer.bind<ITrackerService>(IocTypes.ITrackerService).to(TrackerService).inSingletonScope();
serviceContainer.bind<ITorrentDownloadService>(IocTypes.ITorrentDownloadService).to(TorrentDownloadService).inSingletonScope();
serviceContainer.bind<ITorrentFileService>(IocTypes.ITorrentFileService).to(TorrentFileService);
serviceContainer.bind<ITorrentProcessingService>(IocTypes.ITorrentProcessingService).to(TorrentProcessingService);
serviceContainer.bind<ITorrentSubtitleService>(IocTypes.ITorrentSubtitleService).to(TorrentSubtitleService);
serviceContainer.bind<ITorrentEntriesService>(IocTypes.ITorrentEntriesService).to(TorrentEntriesService);
serviceContainer.bind<IMetadataService>(IocTypes.IMetadataService).to(MetadataService);
serviceContainer.bind<IDatabaseRepository>(IocTypes.IDatabaseRepository).to(DatabaseRepository);
serviceContainer.bind<IProcessTorrentsJob>(IocTypes.IProcessTorrentsJob).to(ProcessTorrentsJob);

export {serviceContainer};